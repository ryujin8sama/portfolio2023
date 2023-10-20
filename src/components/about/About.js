/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Salut !";
  const aboutme = `Je suis Bouazzaoui Soheib, un étudiant en 2eme année de 
                  BUT informatique. 
                  Je suis passionné par le réseau, le dev mobile et la cybersécuritée. Je suis toujours à la recherche de nouveaux defis !        Je suis actuellement à la recherche d'un stage de 10 semaines dans le domaine.

                   `;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme} Je suis passionné par <b>le réseau, le dev mobile et la cybersécuritée </b>. Je suis toujours à la recherche de nouveaux defis ! Je suis actuellement à la recherche d'un stage de 10 semaines dans le domaine.
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Me contacter :.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
