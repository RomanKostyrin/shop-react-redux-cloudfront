import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const list = [
  { title: "Iron Man", link: "", id: "1" },
  { title: "Thor", link: "", id: "2" },
  { title: "Captain America", link: "", id: "3" },
  { title: "Avengers", link: "", id: "4" },
  { title: "GotG", link: "", id: "5" },
  { title: "Ant Man", link: "", id: "6" },
  { title: "Doctor Strange", link: "", id: "7" },
  { title: "Spider Man", link: "", id: "8" },
  { title: "Black Panther", link: "", id: "9" },
];

type Props = {
  onClick: (id: string) => void;
};

export default function Menu({ onClick }: Props) {
  return (
    <Paper sx={{ width: 220, maxWidth: "100%" }}>
      <MenuList>
        {list.map((el) => (
          <MenuItem key={el.id} onClick={() => onClick(el.id)}>
            <ListItemText>{el.title}</ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
        ))}

        <Divider />
        <MenuItem onClick={() => onClick("")}>
          <ListItemText>All</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
