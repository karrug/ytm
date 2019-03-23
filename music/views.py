from django.shortcuts import render
from django.http.response import HttpResponse, HttpResponseRedirect, JsonResponse
from django.http import StreamingHttpResponse
from music import utils


def home(request):
    network = request.GET.get('network', 'high')
    if request.POST:
        q = request.POST['q']
        results = utils.get_results(q)
        return render(request, 'music/home.html', {'results': results, 'q': q, 'network': network})
    else:
        return render(request, 'music/home.html', {'network': network})


def dinesh_home(request):
    network = request.GET.get('network', 'high')
    if request.POST:
        q = request.POST['q']
        results = utils.get_results(q)
        return render(request, 'music/dinesh_home.html', {'results': results, 'q': q, 'network': network})
    else:
        return render(request, 'music/dinesh_home.html', {'network': network})


def get_src(request, videoid):
    src = utils.get_info(videoid)
    return JsonResponse({'src': src})
