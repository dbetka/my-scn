import {IonContent, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {IonButton} from "@ionic/react";
import './Tab1.css';

const Tab1: React.FC = () => {

  function login () {
    alert('login')
  }

  let content;
  const pinIsCorrect = false;

  if (pinIsCorrect) {
    content = <div>
      <IonLabel>Kwota do pobrania</IonLabel>
      <IonInput type="number" placeholder="000"></IonInput>
    </div>
  } else {
    content = <div>
      <IonImg src="/assets/drawing.png" alt="logo"></IonImg>
      <IonItem>
        <IonLabel>Number input</IonLabel>
        <IonInput type="number" placeholder="000"></IonInput>
      </IonItem>
      <div className={'test'}>
        <IonButton onClick={login}>Potwierdż</IonButton>
      </div>
    </div>
  }

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
        {content}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
