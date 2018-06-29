import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCodesPage } from './qr-codes';

@NgModule({
  declarations: [
    QrCodesPage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodesPage),
  ],
})
export class QrCodesPageModule {}
