import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { boolean } from 'mathjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  private tipoColor = 'ColorType';

  public tipo: null | string = '';

  public myForm: FormGroup = this.fb.group({
    titulo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    completada: [false],
    id: [null]
  })

  ngOnInit(): void {
    this.tipo = localStorage.getItem(this.tipoColor);
  }

  constructor(private fb: FormBuilder) { }


  @Input() listaTareas: { id: number, titulo: string, descripcion: string, completada: boolean }[] = [];
  @Input() set tareaSeleccionarEdicion(value: undefined | { id: number, titulo: string, descripcion: string, completada: boolean }) {
    console.log(value)
    if (value) {
      this.myForm.get('titulo')!.setValue(value.titulo);
      this.myForm.get('descripcion')!.setValue(value.descripcion);
      this.myForm.get('completada')!.setValue(value.completada);
      this.myForm.get('id')!.setValue(value.id);
    }
  }

  @Output() tareaGuardada = new EventEmitter<{ id: number, titulo: string, descripcion: string, completada: boolean }>();
  @Output() notificacionAceptarEdicion = new EventEmitter<{ id: number, titulo: string, descripcion: string, completada: boolean }>();
  @Output() notificarEstadoTarea = new EventEmitter<{ id: number, completada: boolean }>();


  edit() {
    this.notificacionAceptarEdicion.emit({ id: this.myForm.get('id')!.value, titulo: this.myForm.get('titulo')!.value, descripcion: this.myForm.get('descripcion')!.value, completada: this.myForm.get('completada')!.value });
  }

  estadoTarea(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.myForm.get('completada')!.setValue(checkbox.checked);
    this.notificarEstadoTarea.emit({ id: this.myForm.get('id')!.value, completada: this.myForm.get('completada')!.value });
  }


  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }


  getFieldError(field: string): string | null {

    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
      }
    }

    return null;
  }




  onSave(): void {


    if (this.myForm.invalid) {
      return;
    }

    const date = new Date();
    const id = date.getTime();

    if (this.myForm.get('id')!.value === null) {
      this.tareaGuardada.emit({ id, titulo: this.myForm.get('titulo')!.value, descripcion: this.myForm.get('descripcion')!.value, completada: this.myForm.get('completada')!.value });
      console.log('creada', this.myForm.value);
    } else {
      this.edit();
      console.log('editada', this.myForm.value);
    }

    // this.completada = false;
    this.limpiarformulario();
  }

  limpiarformulario() {

    setTimeout(() => {
      this.myForm.reset({ name: '', description: '', id: null, complete: false });
      this.myForm.markAsPristine();
      this.myForm.markAsUntouched()
    },250)
  }

}
