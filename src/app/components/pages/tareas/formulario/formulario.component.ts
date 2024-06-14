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

  public titulo: string = '';
  public descripcion: string = '';
  public completada: boolean = false;

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    complete: [boolean, [Validators.required]],
  })


  id: undefined | number = undefined;

  ngOnInit(): void {
    this.tipo = localStorage.getItem(this.tipoColor);
  }

  constructor(private fb: FormBuilder) { }


  @Input() listaTareas: { id: number, titulo: string, descripcion: string, completada: boolean }[] = [];
  @Input() set tareaSeleccionarEdicion(value: undefined | { id: number, titulo: string, descripcion: string, completada: boolean }) {
    console.log(value)
    if (value) {
      this.titulo = value.titulo;
      this.descripcion = value.descripcion;
      this.id = value.id;
      this.completada = value.completada;
    }
  }

  @Output() tareaGuardada = new EventEmitter<{ id: number, titulo: string, descripcion: string, completada: boolean }>();
  @Output() notificacionAceptarEdicion = new EventEmitter<{ id: number, titulo: string, descripcion: string, completada: boolean }>();
  @Output() notificarEstadoTarea = new EventEmitter<{ id: number, completada: boolean }>();


  edit() {
    this.notificacionAceptarEdicion.emit({ id: this.id!, titulo: this.titulo, descripcion: this.descripcion, completada: this.completada });
  }

  estadoTarea(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.completada = checkbox.checked;
    this.notificarEstadoTarea.emit({ id: this.id!, completada: this.completada });
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
      this.myForm.markAllAsTouched();
      return;
    }

    const date = new Date();
    const id = date.getTime();

    if (this.id === undefined) {
      this.tareaGuardada.emit({ id, titulo: this.titulo, descripcion: this.descripcion, completada: this.completada });
      console.log('creada', this.myForm.value);
    } else {
      this.edit();
      console.log('editada', this.myForm.value);
    }

    this.completada = false;
    this.limpiarformulario();
  }


  limpiarformulario() {
    this.id = undefined;
    this.titulo = '';
    this.descripcion = '';
    this.myForm.reset({ name: '', description: '', complete: false  });
    this.myForm.markAsPristine();
    this.myForm.markAsUntouched()
  }

}
