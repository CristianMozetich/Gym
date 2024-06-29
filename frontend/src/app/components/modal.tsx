"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="w-44" color="primary" onPress={onOpen}>Ver Detalles</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ¿Qué Ofrecemos?
              </ModalHeader>
              <ModalBody>
                <p>
                  Registro y Perfil Personalizado: Comienza ingresando tu
                  información básica, como peso, altura, edad y sexo. Esta
                  información es fundamental para personalizar tu experiencia y
                  asegurar que cada plan de entrenamiento se adapte
                  específicamente a tus necesidades y capacidades.
                </p>
                <p>
                  Establecimiento de Objetivos: Define tus metas de fitness. Ya
                  sea que quieras perder peso, tonificar tu cuerpo o mejorar tu
                  resistencia, nuestros entrenadores personales utilizarán esta
                  información para crear un plan efectivo y realista para ti
                </p>
                <p>
                  Asesoramiento Personalizado: Una vez que hayas proporcionado
                  tus objetivos y detalles personales, nuestro equipo de
                  entrenadores certificados revisará tu información y creará un
                  plan de entrenamiento completamente adaptado a tus necesidades
                  individuales.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
