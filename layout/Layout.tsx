import Head from 'next/head'
import React from 'react';
import { Container } from 'react-bootstrap';

interface AppProps{
  children: React.ReactNode;
  title?: string;
}


export const Layout = ({ children, title = "Grilla Paginada" }: AppProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Grilla Paginada, Operaciones de conjuntos, etc"
        />
      </Head>

      <Container className="vh-100 mt-5">{children}</Container>
    </>
  );
};
