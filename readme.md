                              # Português


# Script de Exportação do Firestore para Planilha

Este script permite que você exporte dados de uma coleção Firestore e os popule em uma Planilha do Google.

## Pré-requisitos

Antes de usar este script, certifique-se de ter o seguinte:

- Um projeto da Google Cloud Platform (GCP) com o Firestore habilitado.
- Acesso ao banco de dados Firestore com as permissões necessárias.
- Uma Planilha do Google onde você deseja exportar os dados.

## Configuração

### 1. Habilitar a API do Firestore

1. Acesse o [Console da Google Cloud](https://console.cloud.google.com/).
2. Navegue até o seu projeto GCP.
3. Habilite a API do Firestore.

### 2. Obter Credenciais do Firestore

1. No Console da Nuvem, vá para "IAM e Administração" > "Contas de serviço."
2. Crie uma nova conta de serviço com as permissões necessárias.
3. Baixe o arquivo JSON de chave para a conta de serviço.

### 3. Configurar o FirestoreApp no Script

Abra o script `exportDataToSheet` e atualize as seguintes variáveis com suas credenciais do Firestore:

```javascript
var firestore = FirestoreApp.getFirestore(email, key, projectId);
essas informações estão contidas no arquivo JSON que você baixou
### 4. Configurar o FirestoreApp no Script
Crie uma nova Planilha do Google ou abra uma existente.
Abra o editor de scripts em "Extensões" > "Apps Script."
Copie e cole o script exportDataToSheet (dentro de index.js) no editor.
Salve o projeto com um nome apropriado.
### 5. Configurar o SpreadsheetApp no Script
Abra a guia Bibliotecas no menu e cole o ID da Biblioteca: 1VUSl4b1r1eoNcRWotZM3e87ygkxvXltOgyDZhixqncz9lQ3MjfT1iKFw e salve.
Execute o script no botão "executar".

-----------------------------------------------------------------------------------------------------------------------------------

                                              # Inglês

# Firestore to Spreadsheet Export Script

This script allows you to export data from a Firestore collection and populate it into a Google Spreadsheet.

## Prerequisites

Before using this script, make sure you have the following:

- A Google Cloud Platform (GCP) project with Firestore enabled.
- Access to the Firestore database with the necessary permissions.
- Google Sheets where you want to export the data.

## Setup

### 1. Enable Firestore API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Navigate to your GCP project.
3. Enable the Firestore API.

### 2. Obtain Firestore Credentials

1. In the Cloud Console, go to "IAM & Admin" > "Service accounts."
2. Create a new service account with the necessary permissions.
3. Download the JSON key file for the service account.

### 3. Configure FirestoreApp in the Script

Open the `exportDataToSheet` script and update the following variables with your Firestore credentials:

```javascript
var firestore = FirestoreApp.getFirestore(email, key, projectId);
this informations contain into JSON file that you got

### 4. Configure FirestoreApp in the Script
1. Create a new Google Sheet or open an existing one.
2. Open the script editor from "Extensions" > "Apps Script."
3. Copy and paste the exportDataToSheet script(inside index.js) into the editor.
4. Save the project with an appropriate name.

### 5. Configure SpreadsheetApp in the Script
1. Open the tab Libraries at menu and past into Library ID: 1VUSl4b1r1eoNcRWotZM3e87ygkxvXltOgyDZhixqncz9lQ3MjfT1iKFw and save
2. Run the script at button execute