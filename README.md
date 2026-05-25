GargoTrust
This project was generated using Angular CLI version 19.0.7.
Project Overview
GargoTrust is an Angular application designed to provide a structured and reusable architecture for managing online purchasing workflows. The project includes custom reusable UI services for displaying modal dialogs and toast notifications across the application.
---
Development server
To start a local development server, run:
```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`.
---
Code scaffolding
To generate a new component:
```bash
ng generate component component-name
```
For all available schematics:
```bash
ng generate --help
```
---
Building
To build the project:
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.
---
Running unit tests
```bash
ng test
```
---
Running end-to-end tests
```bash
ng e2e
```
---
Custom UI Services
The application includes two reusable UI services:
ModalService: manages centralized modal dialogs.
ToastService: manages temporary notifications.
---
Modal System
The modal service allows any component to open a modal window dynamically by sending a configuration object.
Available properties
Property	Type	Description
`titre`	string	Title of the modal
`message`	string	Main message/content
`position`	center / top / right	Display position
`size`	small / medium / large / extra-large / extra-large-2 / fullscreen	Modal size
How to use ModalService
Import and inject the service:
```typescript
import { ModalService } from './services/modal.service';

constructor(private modalService: ModalService) {}
```
Open a modal:
```typescript
this.modalService.open({
  titre: 'Confirmation',
  message: 'Do you want to continue?',
  position: 'center',
  size: 'medium'
});
```
Close a modal:
```typescript
this.modalService.close();
```
---
Toast Notification System
Toast notifications are small messages displayed temporarily to inform the user of an action result.
Supported types
success
error
How to use ToastService
Import and inject the service:
```typescript
import { ToastService } from './services/toast.service';

constructor(private toastService: ToastService) {}
```
Show success notification:
```typescript
this.toastService.success('Success', 'Operation completed successfully');
```
Show error notification:
```typescript
this.toastService.error('Error', 'An error occurred');
```
---
Example in a Component
```typescript
saveData() {
  this.modalService.open({
    titre: 'Saving',
    message: 'Please wait...',
    position: 'center',
    size: 'small'
  });

  this.toastService.success('Saved', 'Data saved successfully');
}
```
---
Recommended Project Structure
```text
src/app/
├── core/
│   └── services/
├── models/
├── pages/
├── components/
└── shared/
```
---
Additional Resources
For more information on Angular CLI, visit the Angular official documentation:
https://angular.dev/tools/cli