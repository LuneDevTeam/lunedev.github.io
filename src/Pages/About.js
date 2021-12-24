import React from 'react';
import Employees from '../components/Employees';
import Footer from '../components/Footer';
import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import employees from '../data/employees-data';

import aboutLogo from '../images/Site/logo_purple.png'
import logotype from '../images/Site/logotype_white.png'


const paragraphContent = `A Lune nasceu com a vontade de atender a demanda de websites com uma cara jovem e despojada, visando sempre a diversidade e o humor. Para nós, o seu desejo é uma ordem! Venha conhecer a nossa equipe!`;

const manifesto = `As transformações no mundo do trabalho não trouxeram para os trabalhadores nenhum ganho qualitativo, ao contrário, impuseram-lhes mais tempo de trabalho, mais insegurança, mais empobrecimento e ausência de futuro. Precarizaram as suas vidas e confiscaram o seu direito de sonhar.
Ainda é tempo de lutar. Uni-vos!`;

class About extends React.Component {
  render() {
    return (
      <div className="content">
        <Paragraph paragraphContent={paragraphContent} />
        <img src={aboutLogo} className="about-logo" alt="Logo da Lune" />
        <Paragraph paragraphContent={manifesto} />
        <img src={logotype} className="about-logotype" alt="Logotipo da Lune" />
        <Title title="TEAM" />
        {employees.map((empregado) => {
          return (
            <Employees
              key={empregado.id}
              sourceImage={empregado.image}
              altText={empregado.altimage}
              employeeName={empregado.name}
              employeeDescription={empregado.description}
              linkedin={empregado.linkedin}
              className={empregado.id % 2 === 0 ? 'employees-right' : 'employees-left'}
              employeeSide={empregado.id % 2 === 0 ? 'employee-side-right' : 'employee-side-left'}
            />
          );
        })}

        <Footer />
      </div>
    );
  }
}

export default About;
