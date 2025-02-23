import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FaBook, FaUsers, FaUserShield } from 'react-icons/fa';
import { Pie, Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  PieController, 
  ArcElement, 
  Tooltip, 
  Legend 
} from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  PieController,
  ArcElement,
  Tooltip,
  Legend
);

const User=()=> {
  // States for dynamic counts
  const [memberCount, setMemberCount] = useState(100);
  const [bookCount, setBookCount] = useState(500);
  const [adminCount, setAdminCount] = useState(5);
  const [bookHistory, setBookHistory] = useState([500, 520, 530, 540]); // Initial book count history

  // Simulate member count change
  useEffect(() => {
    const interval = setInterval(() => {
      setMemberCount(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update book count history when book count changes
  useEffect(() => {
    setBookHistory(prev => [...prev.slice(-5), bookCount]); // Keep last 5 records
  }, [bookCount]);

  // Pie chart data
  const pieData = {
    labels: ['Employee', 'Admins'],
    datasets: [
      {
        data: [memberCount, adminCount],
        backgroundColor: ['#4bc0c0', '#ff6384'],
        hoverBackgroundColor: ['#36a2eb', '#ff9f40'],
      },
    ],
  };

  // Pie chart options
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom sizing
  };

  // Line chart data
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Example labels
    datasets: [
      {
        label: 'Books Over Time',
        data: bookHistory,
        borderColor: '#36a2eb',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom sizing
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Book Count',
        },
      },
    },
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div
        style={{
          width: '1000px',
          height: '400px',
        //   border: '1px solid #ddd',
        //   borderRadius: '8px',
        //   padding: '10px',
          display: 'grid',
          gridTemplateRows: '1fr 2fr', // For cards and chart
          gap: '10px',
          marginBottom:"200px"
        }}
      >
        {/* Cards Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Books Card */}
          <Card style={{ flex: 1, margin: '0 5px', textAlign: 'center', backgroundColor: 'rgb(26, 231, 180)' }}>
            <Card.Body>
              <FaBook size={30} />
              <Card.Title>Task</Card.Title>
              <Card.Text>{bookCount}</Card.Text>
              <Button variant="primary" size="sm" onClick={() => setBookCount(bookCount + 1)}>
                Add
              </Button>
            </Card.Body>
          </Card>

          {/* Members Card */}
          <Card style={{ flex: 1, margin: '0 5px', textAlign: 'center', backgroundColor: 'skyblue' }}>
            <Card.Body>
              <FaUsers size={30} />
              <Card.Title>Employees</Card.Title>
              <Card.Text>{memberCount}</Card.Text>
              <Button variant="secondary" size="sm" onClick={() => setMemberCount(memberCount + 1)}>
                Add
              </Button>
            </Card.Body>
          </Card>

          {/* Admins Card */}
          <Card style={{ flex: 1, margin: '0 5px', textAlign: 'center', backgroundColor: 'pink' }}>
            <Card.Body>
              <FaUserShield size={30} />
              <Card.Title>Admins</Card.Title>
              <Card.Text>{adminCount}</Card.Text>
              <Button variant="danger" size="sm" onClick={() => setAdminCount(adminCount + 1)}>
                Add
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* Charts Row */}
        <div style={{ display: 'flex', gap: '10px', height: '100%' }}>
          {/* Pie Chart */}
          <div style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor:"#f7e8c1" }}>
            <Pie data={pieData} options={pieOptions} />
          </div>

          {/* Line Chart */}
          <div style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '8px' , backgroundColor:"#f7e8c1" }}>
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default User;
