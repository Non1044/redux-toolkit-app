import { useGetAllAttractionsQuery } from "./services/attraction";
import { DataGrid,GridActionsCellItem } from "@mui/x-data-grid";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AttractionCard from "./AttractionCard";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {  useDispatch } from 'react-redux'
import { setAttractionID } from "./features/Attraction/AttractionSlice";

function App() {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetAllAttractionsQuery();


  const columns = [
    { field: "id", headerName: "id", width: 50 },
    { field: "coverimage", headerName: "image", width: 100,
      renderCell: (params)=><Avatar src={params.value} variant="square"/> },
    { field: "name", headerName: "name", width: 150 },
    { field: "detail", headerName: "detail", width: 500 },
    { field: "latitude", headerName: "latitude", width: 100 },
    { field: "longitude", headerName: "longitude", width: 100 },
    { field: "action", headerName: "action", width: 100,
      renderCell: (params)=><GridActionsCellItem
      icon={<VisibilityIcon/>}
      onClick={()=>dispatch(setAttractionID(params.id))}/> }
  ];

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        <Container maxWidth="lg">
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
          <div>
            <AttractionCard/>
          </div>
          </Container>
        </>
      ) : null}
    </div>
  );
}

export default App;
