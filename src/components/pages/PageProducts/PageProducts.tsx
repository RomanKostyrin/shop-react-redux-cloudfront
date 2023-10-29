import Products from "~/components/pages/PageProducts/components/Products";
import Menu from "./components/Menu";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PageProducts() {
  const navigate = useNavigate();

  const onClickHandle = (id: string) => {
    navigate(`?filter=${id}`);
  };

  return (
    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
      <Grid item xs={3}>
        <Menu onClick={onClickHandle} />
      </Grid>
      <Grid item xs={9}>
        <Products />
      </Grid>
    </Grid>
  );
}
