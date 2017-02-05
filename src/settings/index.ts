// This module was fully migrated to Angular 2
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SettingsCmp} from './settings_cmp';
import {PageSizeCmp} from './page_size_cmp';
import {MessageCmpDirective} from './message_ng2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'settings', children: [
        { path: '', component: SettingsCmp },
        { path: 'pagesize', component: PageSizeCmp }
      ] },
    ])
  ],
  declarations: [SettingsCmp, PageSizeCmp, MessageCmpDirective]
})
export class SettingsNgModule {
}
