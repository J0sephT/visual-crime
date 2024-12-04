export type VariableType = 
  | 'integer'
  | 'float'
  | 'string'
  | 'date'
  | 'time';

export interface Variable {
  id: string;
  name: string;
  type: VariableType;
}

export const variables: Variable[] = [
  { id: 'id_victima', name: 'Id Victima', type: 'integer' },
  { id: 'tipo_muert', name: 'Tipo Muert.', type: 'string' },
  { id: 'primera_unidad', name: 'Primera Unidad Llegar', type: 'string' },
  { id: 'multiple', name: 'Múltiple', type: 'string' },
  { id: 'relacionado', name: 'Relacionado', type: 'string' },
  { id: 'cod_relacion', name: 'Cod. Relacio.', type: 'integer' },
  { id: 'zona', name: 'Zona', type: 'string' },
  { id: 'subzona', name: 'Subzona', type: 'string' },
  { id: 'distrito', name: 'Distrito', type: 'string' },
  { id: 'circuito', name: 'Circuito', type: 'string' },
  { id: 'cod_subcircu', name: 'Cod. Subcircu.', type: 'string' },
  { id: 'subcircuito', name: 'Subcircuito', type: 'string' },
  { id: 'calle_principal_infraccion', name: 'Calle Principal Infracción', type: 'string' },
  { id: 'calle_secundaria_infraccion', name: 'Calle Secundaria Infracción', type: 'string' },
  { id: 'calle_principal_levantamiento', name: 'Calle Principal Levantamiento', type: 'string' },
  { id: 'calle_secundaria_levantamiento', name: 'Calle Secundaria Levantamiento', type: 'string' },
  { id: 'latitud', name: 'Latitud', type: 'float' },
  { id: 'longitud', name: 'Longitud', type: 'float' },
  { id: 'area_del_hecho', name: 'Area del Hecho', type: 'string' },
  { id: 'acude_fiscal', name: 'Acude Fiscal', type: 'string' },
  { id: 'lugar', name: 'Lugar', type: 'string' },
  { id: 'tipo_lugar', name: 'Tipo Lugar', type: 'string' },
  { id: 'fecha_acta', name: 'Fecha Acta', type: 'date' },
  { id: 'hora_acta', name: 'Hora Acta', type: 'time' },
  { id: 'fecha_infraccion', name: 'Fecha Infracción', type: 'date' },
  { id: 'hora_infraccion', name: 'Hora Infracción', type: 'time' },
  { id: 'arma', name: 'Arma', type: 'string' },
  { id: 'tipo_arma', name: 'Tipo Arma', type: 'string' },
  { id: 'indicios', name: 'Indicios', type: 'string' },
  { id: 'aliento_licor', name: 'Aliento a Licor', type: 'string' },
  { id: 'presun_motiva', name: 'Presun. Motiva.', type: 'string' },
  { id: 'presun_motiva_obser', name: 'Presun. Motiva. Obser', type: 'string' },
  { id: 'probable_causa', name: 'Probable Causa M.', type: 'string' },
  { id: 'indicio_tox', name: 'Indicio Tox', type: 'string' },
  { id: 'edad', name: 'Edad', type: 'integer' },
  { id: 'med_edad', name: 'Med. Edad', type: 'string' },
  { id: 'sexo', name: 'Sexo', type: 'string' },
  { id: 'genero', name: 'Género', type: 'string' },
  { id: 'color_piel', name: 'Color Piel', type: 'string' },
  { id: 'color_cabello', name: 'Color Cabello', type: 'string' },
  { id: 'etnia', name: 'Etnia', type: 'string' },
  { id: 'estado_civil', name: 'Estado Civil', type: 'string' },
  { id: 'nacionalidad', name: 'Nacionalidad', type: 'string' },
  { id: 'discapacidad', name: 'Discapacidad', type: 'string' },
  { id: 'glbti', name: 'GLBTI', type: 'string' },
  { id: 'tiene_seguro', name: 'Tiene Seguro', type: 'string' },
  { id: 'prof_reg_civ', name: 'Prof Reg Civ', type: 'string' },
  { id: 'profesion', name: 'Profesión', type: 'string' },
  { id: 'instruccion', name: 'Instrucción', type: 'string' },
  { id: 'antecedentes', name: 'Antecedentes', type: 'string' },
  { id: 'numero_deten', name: 'Número de Deten.', type: 'integer' },
  { id: 'detalle_deten', name: 'Detalle Deten.', type: 'string' },
  { id: 'hipotesis', name: 'Hipótesis', type: 'string' },
  { id: 'num_sospech', name: 'Num Sospech.', type: 'integer' },
  { id: 'num_deteni', name: 'Num Deteni.', type: 'integer' },
  { id: 'inform_med_leg', name: 'Inform. Med Leg', type: 'string' },
  { id: 'etapa_juridica', name: 'Etapa Jurídica', type: 'string' },
  { id: 'resuelto', name: 'Resuelto', type: 'string' },
  { id: 'flagrante', name: 'Flagrante', type: 'string' },
  { id: 'fecha_nac_rc', name: 'Fecha Nac. Rc', type: 'date' },
];
