import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'menu-beginner', loadChildren: './pages/menu-beginner/menu-beginner.module#MenuBeginnerPageModule' },
  { path: 'beginner', loadChildren: './pages/beginner/beginner.module#BeginnerPageModule', canActivate: [AuthGuard] },
  { path: 'grammar-beginner', loadChildren: './pages/grammar-beginner/grammar-beginner.module#GrammarBeginnerPageModule' },
  { path: 'vocabulary-beginner', loadChildren: './pages/vocabulary-beginner/vocabulary-beginner.module#VocabularyBeginnerPageModule' },
  { path: 'listening-beginner', loadChildren: './pages/listening-beginner/listening-beginner.module#ListeningBeginnerPageModule' },
  { path: 'written-beginner', loadChildren: './pages/written-beginner/written-beginner.module#WrittenBeginnerPageModule' },
  { path: 'topics-grammar1', loadChildren: './pages/topics-grammar1/topics-grammar1.module#TopicsGrammar1PageModule' },
  { path: 'verb-be', loadChildren: './pages/topicsGrammar1/verb-be/verb-be.module#VerbBePageModule' },
  { path: 'possessives', loadChildren: './pages/topicsGrammar1/possessives/possessives.module#PossessivesPageModule' },
  { path: 'topics-vocabulary1', loadChildren: './pages/topics-vocabulary1/topics-vocabulary1.module#TopicsVocabulary1PageModule' },
  { path: 'numbers', loadChildren: './pages/topicsVocabulary1/numbers/numbers.module#NumbersPageModule' },
  { path: 'reading', loadChildren: './pages/reading/reading.module#ReadingPageModule' },
  { path: 'text1', loadChildren: './pages/reading/text1/text1.module#Text1PageModule' },
  { path: 'teste1', loadChildren: './pages/tests/teste1/teste1.module#Teste1PageModule' },
  { path: 'testess', loadChildren: './pages/testess/testess.module#TestessPageModule' },
  { path: 'adjectives', loadChildren: './pages/topicsGrammar1/adjectives/adjectives.module#AdjectivesPageModule' },
  { path: 'imperatives', loadChildren: './pages/topicsGrammar1/imperatives/imperatives.module#ImperativesPageModule' },
  { path: 'present-simple', loadChildren: './pages/topicsGrammar1/present-simple/present-simple.module#PresentSimplePageModule' },
  { path: 'word-order', loadChildren: './pages/topicsGrammar1/word-order/word-order.module#WordOrderPageModule' },
  { path: 'prepositions', loadChildren: './pages/topicsGrammar1/prepositions/prepositions.module#PrepositionsPageModule' },
  { path: 'frequency', loadChildren: './pages/topicsGrammar1/frequency/frequency.module#FrequencyPageModule' },
  { path: 'can', loadChildren: './pages/topicsGrammar1/can/can.module#CanPageModule' },
  { path: 'present-continuous', loadChildren: './pages/topicsGrammar1/present-continuous/present-continuous.module#PresentContinuousPageModule' },
  { path: 'object-pronouns', loadChildren: './pages/topicsGrammar1/object-pronouns/object-pronouns.module#ObjectPronounsPageModule' },
  { path: 'past-simple', loadChildren: './pages/topicsGrammar1/past-simple/past-simple.module#PastSimplePageModule' },
  { path: 'plural', loadChildren: './pages/topicsGrammar1/plural/plural.module#PluralPageModule' },
  { path: 'countable', loadChildren: './pages/topicsGrammar1/countable/countable.module#CountablePageModule' },
  { path: 'quantifiers', loadChildren: './pages/topicsGrammar1/quantifiers/quantifiers.module#QuantifiersPageModule' },
  { path: 'comparatives', loadChildren: './pages/topicsGrammar1/comparatives/comparatives.module#ComparativesPageModule' },
  { path: 'superlative', loadChildren: './pages/topicsGrammar1/superlative/superlative.module#SuperlativePageModule' },
  { path: 'be-going', loadChildren: './pages/topicsGrammar1/be-going/be-going.module#BeGoingPageModule' },
  { path: 'adverbs', loadChildren: './pages/topicsGrammar1/adverbs/adverbs.module#AdverbsPageModule' },
  { path: 'verbs-infinitive', loadChildren: './pages/topicsGrammar1/verbs-infinitive/verbs-infinitive.module#VerbsInfinitivePageModule' },
  { path: 'articles', loadChildren: './pages/topicsGrammar1/articles/articles.module#ArticlesPageModule' },
  { path: 'present-perfect', loadChildren: './pages/topicsGrammar/present-perfect/present-perfect.module#PresentPerfectPageModule' },
  { path: 'present-perfect', loadChildren: './pages/topicsGrammar/present-perfect/present-perfect.module#PresentPerfectPageModule' },
  { path: 'present-perfect', loadChildren: './pages/topicsGrammar1/present-perfect/present-perfect.module#PresentPerfectPageModule' },
  { path: 'days', loadChildren: './pages/topicsVocabulary1/days/days.module#DaysPageModule' },
  { path: 'continents', loadChildren: './pages/topicsVocabulary1/continents/continents.module#ContinentsPageModule' },
  { path: 'text2', loadChildren: './pages/reading/text2/text2.module#Text2PageModule' },
  { path: 'text3', loadChildren: './pages/reading/text3/text3.module#Text3PageModule' },
  { path: 'text4', loadChildren: './pages/reading/text4/text4.module#Text4PageModule' },
  { path: 'text5', loadChildren: './pages/reading/text5/text5.module#Text5PageModule' },
  { path: 'text6', loadChildren: './pages/reading/text6/text6.module#Text6PageModule' },
  { path: 'text7', loadChildren: './pages/reading/text7/text7.module#Text7PageModule' },
  { path: 'text8', loadChildren: './pages/reading/text8/text8.module#Text8PageModule' },
  { path: 'text9', loadChildren: './pages/reading/text9/text9.module#Text9PageModule' },
  { path: 'text10', loadChildren: './pages/reading/text10/text10.module#Text10PageModule' },
  { path: 'jobs', loadChildren: './pages/topicsVocabulary1/jobs/jobs.module#JobsPageModule' },
  { path: 'activities', loadChildren: './pages/topicsVocabulary1/activities/activities.module#ActivitiesPageModule' },
  { path: 'food', loadChildren: './pages/topicsVocabulary1/food/food.module#FoodPageModule' },
  { path: 'things', loadChildren: './pages/topicsVocabulary1/things/things.module#ThingsPageModule' },
  { path: 'adjectives', loadChildren: './pages/topicsVocabulary1/adjectives/adjectives.module#AdjectivesPageModule' },
  { path: 'adjective', loadChildren: './pages/topicsVocabulary1/adjective/adjective.module#AdjectivePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
