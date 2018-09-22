from __future__ import unicode_literals
import json
import youtube_dl
import pafy


def results_iterator(item, ydl):
    url = "https://www.youtube.com/watch?v=" + item['id']['videoId']
    info_dict = ydl.extract_info(url, download=False)
    result = {'url': info_dict.get('url', '#'), 'title': item['snippet']['title']}
    return json.dumps(result)

def get_results(q):
    qs = {'q': q, 'maxResults': 10, 'part': 'id,snippet'}
    gdata = pafy.call_gdata('search', qs)
    with youtube_dl.YoutubeDL({'format': 'bestaudio/best'}) as ydl:
        for item in gdata['items']:
            yield results_iterator(item, ydl)
