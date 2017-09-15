import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AmthucPage} from '../pages/Amthuc/Amthuc';
import {LamdepPage} from '../pages/Lamdep/Lamdep';
import {CuocSongPage} from '../pages/Cuocsong/Cuocsong';
import {DienTuPage} from '../pages/Dientu/Dientu';
import {DiDongPage} from '../pages/Didong/Didong';
import {OtoxePage} from '../pages/Otoxe/Otoxe';
import {BriefsPage} from '../pages/Briefs/Briefs';
import {TrendingPage} from '../pages/Trending/Trending';
import {DetailsPage} from '../pages/detail/detail';
import {TopnewPage} from '../pages/topnew/topnew'; 
import {LatestPage} from '../pages/latest/latest';
import {FeaturePage} from '../pages/feature/feature';
import {PhotoPage} from '../pages/Photo/Photo';
import {CommentPage} from '../pages/comment/comment';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { VideoPage } from '../pages/video/video';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {VideocategoryPage} from '../pages/videocategory/videocategory';
import {BookmarkPage} from'../pages/bookmark/bookmark';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AmthucPage,
    LamdepPage,
    CuocSongPage,
    DienTuPage,
    DiDongPage,
    OtoxePage,
    BriefsPage,
    TrendingPage,
    DetailsPage,
    TopnewPage,
    LatestPage,
    FeaturePage,
    PhotoPage,
    VideoPage,
    VideocategoryPage,
    CommentPage,
    BookmarkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AmthucPage,
    LamdepPage,
    CuocSongPage,
    DienTuPage,
    DiDongPage,
    OtoxePage,
    BriefsPage,
    TrendingPage,
    DetailsPage,
    TopnewPage,
    LatestPage,
    FeaturePage,
    PhotoPage,
    VideoPage,
    VideocategoryPage,
    CommentPage,
    BookmarkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
