import {Table as TableBTS} from 'react-bootstrap';
import PropTypes from 'prop-types';


export const Table = ({size, darkMode}) => {

    return (
        <>
        <TableBTS striped bordered hover size={size} variant={darkMode}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </TableBTS>
      </>
      )
}
Table.propTypes = {
    size: PropTypes.string,
};
