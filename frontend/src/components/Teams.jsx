import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, List, ListItem, ListItemText, Select, MenuItem } from "@mui/material";

const API_URL_TEAMS = "http://localhost:3000/api/teams";
const API_URL_FOOD = "http://localhost:3000/api/food";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [teamFormData, setTeamFormData] = useState({ name: "", contactNumber: "" });

  const fetchTeams = async () => {
    const res = await axios.get("http://localhost:3000//api/teams/");
    setTeams(res.data);
  };

  const fetchFoodItems = async () => {
    const res = await axios.get("http://localhost:3000/api/food/get");
    setFoodItems(res.data);
  };

  useEffect(() => {
    fetchTeams();
    fetchFoodItems();
  }, []);

  const handleTeamSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000//api/teams/post", teamFormData);
    fetchTeams();
    setTeamFormData({ name: "", contactNumber: "" });
  };

  const assignFoodToTeam = async (teamId, itemId) => {
    await axios.post(`${API_URL_TEAMS}/${teamId}/assign`, { itemId });
    fetchTeams();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Teams</h2>
      <form onSubmit={handleTeamSubmit} style={{ marginBottom: "20px" }}>
        <TextField
          label="Team Name"
          value={teamFormData.name}
          onChange={(e) => setTeamFormData({ ...teamFormData, name: e.target.value })}
          required
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Contact Number"
          value={teamFormData.contactNumber}
          onChange={(e) => setTeamFormData({ ...teamFormData, contactNumber: e.target.value })}
          required
          style={{ marginRight: "10px" }}
        />
        <Button variant="contained" type="submit">
          Add Team
        </Button>
      </form>
      <List>
        {teams.map((team) => (
          <ListItem key={team._id}>
            <ListItemText primary={team.name} secondary={`Contact: ${team.contactNumber}`} />
            <h4>Assigned Food Items:</h4>
            <List>
              {team.assignedItems.map((item) => (
                <ListItem key={item._id}>{item.name}</ListItem>
              ))}
            </List>
            <Select
              onChange={(e) => assignFoodToTeam(team._id, e.target.value)}
              defaultValue=""
              displayEmpty
            >
              <MenuItem value="" disabled>
                Assign Food Item
              </MenuItem>
              {foodItems.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Teams;
