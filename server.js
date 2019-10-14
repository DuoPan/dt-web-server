const express = require('express');
var cors = require('cors');

const API_PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();

router.get('/helloWorld', (req, res) => {
  return res.json({ success: true, data: 'Send Successfully -- from back end' });
});

router.post('/loadLineChartOption', (req, res) => {
  return res.json({ success: true, data: {
    title: {
      text: 'ECharts with React'
    },
    grid: {
      show: false
    },
    tooltip: {},
    xAxis: {
      data: ["1990","1991","1992","1993","1994","1995"]
    },
    yAxis: {},
    series: [{
      name: 'Test',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20]
    }]
  } });
});

router.post('/loadHeatmapOption', (req, res) => {
  return res.json({ success: true, data: {
    lat: req.body.geometry.coordinates[0][0],
    lng: req.body.geometry.coordinates[0][1],
  }});
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
