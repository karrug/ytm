from django.shortcuts import render
from django.http.response import HttpResponse, HttpResponseRedirect, JsonResponse
from django.http import StreamingHttpResponse
import ydl


def home(request):
    return render(request, 'music/home.html')


def search(request):
    q = request.GET['q']
    #return StreamingHttpResponse(ydl.get_results(q))
    #return render(request, 'music/home.html', {'results': results})
    response = StreamingHttpResponse(ydl.get_results(q), status=200, content_type='text/event-stream')
    response['Cache-Control'] = 'no-cache'
    return response
