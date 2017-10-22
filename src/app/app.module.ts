import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FoodPage} from '../pages/Food/Food';
import {BeautifulPage} from '../pages/Beautiful/Beautiful';
import {LifePage} from '../pages/Life/Life';
import {ElectronicPage} from '../pages/Electronic/Electronic';
import {MobilePage} from '../pages/Mobile/Mobile';
import {CarbikePage} from '../pages/Car-bike/Car-bike';
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
import {SettingPage} from '../pages/Setting/Setting';
import {BookmarkPage} from'../pages/bookmark/bookmark';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FoodPage,
    BeautifulPage,
    LifePage,
    ElectronicPage,
    MobilePage,
    CarbikePage,
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
    SettingPage,
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
    FoodPage,
    BeautifulPage,
    LifePage,
    ElectronicPage,
    MobilePage,
    CarbikePage,
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
    SettingPage,
    BookmarkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
