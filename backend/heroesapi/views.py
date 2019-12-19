from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from PIL import Image
import json
# Create your views here.
version = '77692'
def index(request):
    lang = request.GET.get('lang')
    if lang == None:
        lang = "enus"
    with open("../files/json/herodata_{}_{}.json".format(version, lang), encoding = 'utf-8') as json_file:
        herodata = json.load(json_file)
    herolist = dict()
    for herolink in herodata:
        herolist[herodata[herolink]['name']] = {'herolink' : herolink, 'portraitlink' : herodata[herolink]['portraits']['target']}
    
    return JsonResponse(herolist)

def heroes(request, herolink):
    lang = request.GET.get('lang')
    if lang == None:
        lang = "enus"
    with open("../files/json/herodata_{}_{}.json".format(version, lang), encoding = 'utf-8') as json_file:
        herodata = json.load(json_file)
        context = {
            'herodata' : herodata[herolink]
        }
    return JsonResponse(context)

def talents(request, herolink):
    lang = request.GET.get('lang')
    if lang == None:
        lang = "enus"
    with open("../files/json/herodata_{}_{}.json".format(version, lang), encoding = 'utf-8') as json_file:
        herodata = json.load(json_file)
        talents = {
            'talents' : herodata[herolink]['talents']
        }
    return JsonResponse(talents)


def talentshare(request, herolink, share):
    talenttier = [1, 4, 7, 10, 13, 16, 20]
    talentlist = list(share)
    lang = request.GET.get('lang')
    if lang == None:
        lang = "enus"
    
    with open("../files/json/herodata_{}_{}.json".format(version, lang), encoding = 'utf-8') as json_file:
        herodata = json.load(json_file)
        talents = {
            'talents' : herodata[herolink]['talents']
        }
    context = {}
    for i in range(7):
        for j in talents['talents']['level{}'.format(talenttier[i])]:
            if int(talentlist[i]) == int(j['sort']):
                context.update({'level{}'.format(talenttier[i]) : j})
    return JsonResponse(context)

def portraitimage(request, imagelink):
    with open("../files/images/heroportraits/{}".format(imagelink), 'rb') as portrait:
    
        return HttpResponse(portrait.read(), content_type="image/png")

def skillimage(request, imagelink):
    with open("../files/images/abilitytalents/{}".format(imagelink), 'rb') as portrait:
        return HttpResponse(portrait.read(), content_type="image/png")

def unitimage(request, imagelink):
    with open("../files/images/units/{}".format(imagelink), 'rb') as portrait:
        return HttpResponse(portrait.read(), content_type="image/png")

