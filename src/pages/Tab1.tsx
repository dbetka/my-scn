import {IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import { IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { useIonActionSheet } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/core';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [present] = useIonActionSheet();
  const [, setResult] = useState<OverlayEventDetail>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonImg src="/assets/drawing.png" alt="logo"></IonImg>
        <IonButton expand="block">Block</IonButton> 
        
    <div className="container">
      <IonButton
        onClick={() =>
          present({
            header: 'logowanie',
            subHeader: 'wybierz, gdzie chcesz się zalogować',
            buttons: [
              {
                text: 'Administrator',
                role: '',
                data: {
                  action: '',
                },
              },
              {
                text: 'Plebejusz',
                data: {
                  action: '',
                },
              },
              {
                text: 'anuluj',
                role: 'cancel',
                data: {
                  action: 'cancel',
                },
              },
            ],
            onDidDismiss: ({ detail }) => setResult(detail),
          })
        }
      >
        Open
      </IonButton>
    </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
