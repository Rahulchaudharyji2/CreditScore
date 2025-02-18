import React, { useEffect, useState } from "react";
import { fetchAlerts } from "../services/api";
import { Card, CardContent, Typography, Chip } from "@mui/material";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const getAlerts = async () => {
      const data = await fetchAlerts();
      setAlerts(data);
    };
    getAlerts();
  }, []);

  return (
    <div className="alerts">
      <h2 className="text-2xl font-bold mb-4">Alerts & Notifications</h2>
      {alerts.length === 0 ? (
        <p>No alerts at the moment.</p>
      ) : (
        alerts.map((alert) => (
          <Card key={alert.id} sx={{ marginBottom: 2, padding: 2, borderLeft: "5px solid #FF5733" }}>
            <CardContent>
              <Chip
                label={alert.type.replace("_", " ").toUpperCase()}
                color={alert.type === "fraud" ? "error" : alert.type === "score_change" ? "warning" : "primary"}
              />
              <Typography variant="h6" sx={{ marginTop: 1 }}>{alert.message}</Typography>
              <Typography variant="body2" color="textSecondary">{alert.date}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default Alerts;
