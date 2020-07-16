import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph2 } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';

const Education = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Education</SectionTitle>
                <ul>
                    {user.education.map((education, i) => (
                        <EducationItem key={i}>
                            <Institution>{education.institution}</Institution>
                            <div>
                                <Degree>
                                    {education.studyType}  - {education.gpa} - {education.start.year} to {education.end.year} 
                                </Degree>
                            </div>
                            <Paragraph2>{education.description}</Paragraph2>
                        </EducationItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Education;