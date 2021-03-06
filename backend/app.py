import time
from gevent import monkey # fixes thread issue
monkey.patch_all() # ^
from flask import Flask
from scraper import *
import asyncio
import nest_asyncio
nest_asyncio.apply()

app = Flask(__name__)


c = open('cached_users.json')
cached_users = json.load(c)

#### EXAMPLE ROUTE
@app.route("/programmers") 

def programmers():
    return {"programmers": ["henry", "ryan", "wasay", "angela"]}
####

@app.route('/user/<id>') # /user route
def user(id): 
    if(id == "test"):
        print("returning test data")
        f = open('test.json')
        dat = json.load(f)
        return dat
    if(id in cached_users["usernames"]):
        print("returning cached userdata:", id)
        time.sleep(3)
        f = open(id +'.json')
        dat = json.load(f)
        return dat
    id = id.replace("!", "")
    print(id)
    data = scrape(id) # calls scraper function with id parameter
    with open(id+'.json', 'w') as fp: # saves to cache
        json.dump(data, fp,  indent=4)
    with open('cached_users.json', 'w') as fp: # saves to cache
        cached_users["usernames"] += [id]
        json.dump(cached_users, fp,  indent=4)
    return data



@app.route('/audio/<id>') # /audio route
def song(id): 
    audio_data = get_audio(id)
    print("song get", audio_data)
    return audio_data

@app.route('/video/<id>') # /audio route
def video(id): 
    video_url = get_video(id)
    print("video get", video_url)
    return video_url



if __name__ == "__main__": # entry point
    app.run(debug=0)