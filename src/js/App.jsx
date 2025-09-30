
import React, { useState } from "react";
import Home from "./components/Home";

function App() {
  
  const [visible, setVisible] = useState(true);

  
  const cards = [
    {
      image:
        "https://imgs.search.brave.com/yE3IuAwDMomfHanpCnz8Hdj4veWXC0qrShQWJ9IBfH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzg5MTYyOC1NTFY4/NDQwNTM5MDU1Nl8w/NTIwMjUtRS53ZWJw",
      title: "Polo Hombre",
      description: "Polo Chemise Estivaneli"
    },
    {
      image:
        "https://imgs.search.brave.com/lf8El_PVnRv4j3uWKPk635c0BwFWxxFAuJkL7Kv8HXA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk0MTQ4NC1NTE04/MzU5Njg0MzU2MV8w/NDIwMjUtRS1wYW50/YWxvbi1jaGluby1u/ZWdyby1kZS1zYXJn/YS1wYXJhLWhvbWJy/ZS1jYWx2aW4ta2xl/aW4ud2VicA",
      title: "Pantalón Chino Hombre",
      description: "Pantalón Chino Negro De Sarga"
    },
    {
      image:
        "https://imgs.search.brave.com/3kNgHLeGcDj9ZnNKmBaAQaueQMcczyIIk-qD58nzHLM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWxwYWxhY2lvZGVo/aWVycm8uY29tL2R3/L2ltYWdlL3YyL0JE/S0JfUFJEL29uL2Rl/bWFuZHdhcmUuc3Rh/dGljLy0vU2l0ZXMt/cGFsYWNpby1tYXN0/ZXItY2F0YWxvZy9k/ZWZhdWx0L2R3MDdm/NjU3NTcvaW1hZ2Vz/LzQ0MzE5NjQ5L0NB/RkUvbGFyZ2UvNDQz/MTk2NTBfeDEuanBn/P3N3PTM0NiZzaD0z/OTQ",
      title: "Zapatos Hombre",
      description: "Magnanni Mocasines en piel vacuna"
    },
    {
      image:
        "https://imgs.search.brave.com/8j90JfYdPf6CIlxA9qxUF0Mn1laqMA-V_HYlQQu7wQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY4Nzc2OC1NQ082/OTU5MzEyODAyM18w/NTIwMjMtRS53ZWJw",
      title: "Gafas Hombre",
      description: "Gafas De Sol Ray Ban Aviator L Metal"
    }
  ];

  return (
    <Home visible={visible} onDesmontar={() => setVisible(false)} cards={cards} />
  );
}

export default App;
