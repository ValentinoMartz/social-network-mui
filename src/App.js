import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
/* import Navbar from "./components/Navbar"; */

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;

//----------VIDEO 26:30 Mui App Bar (Navbar)
/* https://www.youtube.com/watch?v=fzxEECHnsvU&list=PL60WseD7DM2DHWe7W4HncUaQUVKD9nQPn&index=9&t=119s&ab_channel=LamaDev */
