from __future__ import unicode_literals
import os
import json
import requests
import youtube_dl
import pafy


def get_results(q):
    results = []
    qs = {'q': q, 'maxResults': 12, 'part': 'id,snippet'}
    pafy.set_api_key(os.environ['PAFY_API_KEY'])
    gdata = pafy.call_gdata('search', qs)
    with youtube_dl.YoutubeDL({'format': 'bestaudio/best'}) as ydl:
        for item in gdata['items']:
            try:
                result = {'extracted': False, 'id': item['id']['videoId'], 'title': item['snippet']['title']}
                results.append(result)
            except KeyError:
                pass
    return results


def get_info(videoid):
    with youtube_dl.YoutubeDL({'format': 'bestaudio/best'}) as ydl:
        url = "https://www.youtube.com/watch?v=" + videoid
        info_dict = ydl.extract_info(url, download=False)
    print(info_dict.get('url', '#'))
    return info_dict.get('url', '#')


def get_treding_results():
    url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&' + \
            'regionCode=IN&maxResults=25&videoCategoryId=10&key=%s' % (os.environ['APIKEY'])
    r = requests.get(url)
    d = r.json()
    results = []
    for i in d['items']:
        results.append({'id': i['id'], 'title': i['snippet']['title']})
    return results


