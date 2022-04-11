from DB import DB
from Spotify import Spotify
from KMeans import KMeans
from DataPreprocessing import make_norm, music_filtering
from Recommender.visual_filtering import visual_filtering
import pandas as pd


class Recommender:
    def __init__(self, _id):
        self.mail_box_id = _id
        self.db = DB()

    def init_setting(self):
        self.db.get_mailbox(_obj_id=self.mail_box_id)

        _sel_tracks = self.db.tracks
        _sel_tracks = pd.DataFrame(_sel_tracks)
        sel_tracks = _sel_tracks[_sel_tracks.columns.difference(["_id"])]

        spotify = Spotify(sel_tracks)
        spotify.get_genres
        spotify.get_features()
        spotify.get_reco_tracks()
        spotify.get_features(target="reco")

        self.spotify = spotify

        print("[ML Program] Spotify Setting Okay :)")

    def data_preprocessing(self):
        self.norm_features = make_norm(
            self.spotify.features, self.spotify.reco_features)
        print("[ML Program] Make Norm Features Okay :)")

    def reco_kmeans(self):
        sel_tracks = self.spotify.sel_tracks
        reco_tracks = self.spotify.reco_tracks
        kmeans = KMeans(
            datas=self.norm_features
        )

        kmeans.run(early_stop_cnt=5)
        _filtering_music_list = music_filtering(sel_tracks, kmeans)

        if len(_filtering_music_list) <= (100 + len(sel_tracks)):
            self.kmeans = kmeans
            recos = [_ in _filtering_music_list
                     for _ in reco_tracks['trackId']]
            self.reco_musics = reco_tracks[recos].copy()
            print("[ML Program] KMeans Processing End :)")

            return
        else:
            filter_music = self.norm_features.set_index(
                "trackId").loc[_filtering_music_list].reset_index()
        while True:
            kmeans = KMeans(
                datas=filter_music
            )
            kmeans.run(early_stop_cnt=5)
            _filtering_music_list = music_filtering(sel_tracks, kmeans)

            if len(_filtering_music_list) <= (100 + len(sel_tracks)):
                break
            else:
                filter_music = self.norm_features.set_index(
                    "trackId").loc[_filtering_music_list].reset_index()

        self.kmeans = kmeans
        recos = [_ in _filtering_music_list
                 for _ in reco_tracks['trackId']]
        self.reco_musics = reco_tracks[recos].copy()
        print("[ML Program] KMeans Processing End :)")

        return

    def visual_filtering(self):
        visual_filtering(self)

    def save(self):
        res = self.db.save_mail(self)
        print("[ML Program] Mail {} Save Okay :)".format(res.inserted_id))
