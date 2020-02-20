import React from 'react';

import { Col, Row } from 'styled-bootstrap-grid';
import { Card } from './Card';

// tslint:disable-next-line: no-default-export
export default {
    title: 'Card',
    component: Card,
};

export const Default = () => (
    <Row>
        <Col md={2}>
            <Card title="Lady in red" img="/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" rating={6.7} />
        </Col>
    </Row>
);

// export const WithSubtitle = () => (
//     <>
//         <Headline1>Starnger things</Headline1>
//         <Subtitle1>
//             {' '}
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, tempore laboriosam? Necessitatibus
//             ducimus tempore possimus blanditiis similique officia! Asperiores non error ducimus eius repudiandae
//             necessitatibus praesentium enim dicta repellat saepe!
//         </Subtitle1>
//     </>
// );
