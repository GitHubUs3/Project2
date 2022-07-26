import React from 'react';
import axios from 'axios';
import { Container, Table, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* This is the webpage that will display the items table. The mapping
of the table is done in a child component -> ItemsMap
*/

export const Items = () => {

    const [table, setTable] = useState([]);


    return (
    <>
    <Container className="text-center">
    <Table striped bordered hover size="sm" variant='light' responsive>
        <thead>
            <tr>
                <td>Name</td>
                <td>Reason</td>
                <td>Notes</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {emp.map((e) =>(
                <ListItem e={e} setTable={setTable} /> 
                    
            ))}

        </tbody>
    </Table>
    </Container>
    </>
    );
}