INSERT INTO receta (id, nombre, descripcion, tiempo_preparacion, categoria, dieta, fecha_creacion) VALUES
  (1,'Ensalada Verde','Lechuga, pepino, aguacate en cubos',10,'SALUDABLE','VEGETARIANA',CURRENT_TIMESTAMP),
  (2,'Smoothie Frutal','Fresas, plátano, leche de almendras',5,'SALUDABLE','VEGANA',CURRENT_TIMESTAMP),
  (3,'Hamburguesa','Carne de res, pan integral, queso',20,'NO_SALUDABLE','NINGUNA',CURRENT_TIMESTAMP);

INSERT INTO receta_ingredientes (receta_id, ingrediente_nombre, ingrediente_calorias) VALUES
  (1,'Lechuga',15),(1,'Pepino',8),(1,'Aguacate',160),
  (2,'Fresas',32),(2,'Plátano',89),(2,'Leche de almendras',30),
  (3,'Carne de res',250),(3,'Pan integral',120),(3,'Queso',113);