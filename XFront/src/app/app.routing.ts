import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReviewComponent } from './components/review/review.component';
import { AuthGuard } from './auth.guard';
import { RankingComponent } from './components/ranking/ranking.component';
import { GenreComponent } from './components/genre/genre.component';
import { BookInfoComponent } from './components/book/bookInfo.component';
import { ChapComponent } from './components/book/chap.component';
import { AuthorComponent } from './components/author/author.component';
import { CreateBookComponent } from './components/book/createbook.component';
import { ReviewDetailComponent } from './components/review/reviewDetail.component';
import { CreateReviewComponent } from './components/review/createReview.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent 
    },
    {
        path: 'thao-luan',
        component: ReviewComponent 
    },
    {
        path: 'thao-luan/:slug',
        component: ReviewDetailComponent 
    },
    {
        path: 'bang-xep-hang',
        component: RankingComponent 
    },
    {
        path: 'chuyen-muc/:slug',
        component: GenreComponent 
    },
    {
        path: 'sach/:slug',
        component: BookInfoComponent 
    },
    {
        path: 'sach/:slug/:chap',
        component: ChapComponent 
    },
    {
        path: 'tac-gia/:slug',
        component: AuthorComponent 
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'them-sach',
        component: CreateBookComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'them-bai-thao-luan',
        component: CreateReviewComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: '**', 
        redirectTo: '', 
        pathMatch: 'full' 
    }
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);