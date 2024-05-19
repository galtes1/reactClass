import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const CustomSearchBar = () => {
  const { isDark } = useTheme();
  const [searchParams, setSearch] = useSearchParams();
  const HandleChange = ({ target }) => setSearch({ q: target.value });

  return (
    <Box display="inline-flex">
      <FormControl variant="standard">
        <OutlinedInput
          sx={{
            backgroundColor: isDark ? "#333333" : "#e3f2fd",
          }}
          placeholder="search"
          size="small"
          value={searchParams.get("q") ?? ""}
          onChange={HandleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        ></OutlinedInput>
      </FormControl>
    </Box>
  );
};
export default CustomSearchBar;
