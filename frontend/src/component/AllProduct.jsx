import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch ,useSelector } from 'react-redux'
import {getAllProductsAction,fetchDeleteMessage} from '../redux/product/action';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
  const classes = useStyles();
  const dispatch=useDispatch()

  const rows = useSelector((store) => store.prod.products)
  const isLoading = useSelector((store) => store.prod.loading)
  // const pro_id = useSelector((store)=> store.prod.products._id)
  console.log("lodingg...",isLoading)
  // console.log("products idd",pro_id)

  const deleteproduct=(id)=>{
    console.log(id)
    dispatch(fetchDeleteMessage(id))
  }
  

  

  useEffect(() => {
    console.log(rows)
    if(rows.length === 0) {
      console.log("get all products")
      dispatch(getAllProductsAction())
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  
  
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">name</TableCell>
            <TableCell align="left">Purchase price</TableCell>
            <TableCell align="left">Selling Price</TableCell>            
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            isLoading 
            ?
            <>
              <TableRow>              
                <TableCell colSpan={4}>data is loading ...</TableCell>
              </TableRow>
            </>
            :
            <> 
              {rows && rows.map((row,index) => (
              <TableRow key={row.id+''+index}>              
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.purches_price}</TableCell>
                <TableCell align="left">{row.selling_price}</TableCell>
                {/* <button to="#"><TableCell align="left">Edit</TableCell></button> */}
                <TableCell align="left"><button onClick = { () => deleteproduct( row._id ) }>delete</button></TableCell>
              </TableRow>
            ))}
            </>
          }
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
