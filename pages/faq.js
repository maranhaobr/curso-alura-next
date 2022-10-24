import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from '../src/components/Link';
import PageTitle from '../src/components/PageTitle';

//SSG - Static Site Generation
//SSR - Server Side Rendering
//ISG - Incremental Static Generation

// export async function getServerSideProps() {
//   console.log('Rodando a cada acesso que você recebe');
//   console.log('Em modo DEV sempre roda! A cada acesso.');

export async function getStaticProps() {
  console.log('Roda SOMENTE em build time');
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: {
      qualquerCoisa: 'O que',
      faq
    }, 
  }
}

export default function FAQPage({faq}) {
  console.log(faq);
  // const [faq, setFaq] = useState ([]);
  // useEffect(() => {
    
  // }, []);
  return (
    <div>
      <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
      <h1>Alura cases - Página FAQ</h1>
      <Link href="/">
        Ir para a Home
      </Link>

      <ul>
        {faq.map(({answer, question}) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}