from __future__ import unicode_literals
import json
import youtube_dl
import pafy


def get_results(q):
    results = []
    qs = {'q': q, 'maxResults': 12, 'part': 'id,snippet'}
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
    return info_dict.get('url', '#')
