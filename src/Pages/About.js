import React from 'react';
import Employees from '../components/Employees';
import Footer from '../components/Footer';
import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import imagem from '../data/defaultImage.png';
import employees from '../data/employees-data';

const paragraphContent = `What we do, What we do,
What we do, What we do,
What we do, What we do,
What we do, What we do `;

const manifesto = `Manifesto, Manifesto, Manifesto,
Manifesto, Manifesto, Manifesto,
Manifesto, Manifesto, Manifesto,`;

class About extends React.Component {
  render() {
    return (
      <div className="content">
        <Paragraph paragraphContent={paragraphContent} />
        <img src={imagem} alt="Logo da Lune" />
        <Paragraph paragraphContent={manifesto} />
        <Title aboutTitle="TEAM" />
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
            />
          );
        })}

        <Footer />
      </div>
    );
  }
}

export default About;
