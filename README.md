# Taulukko Messages Rabbit

Taulukko Messages Rabbit is an advanced provider for the Taulukko Messages library, leveraging RabbitMQ to enhance the messaging capabilities. This provider replaces the default in-memory system with RabbitMQ, offering robustness and scalability for more complex messaging needs.

## Features

- **RabbitMQ Integration**: Utilizes RabbitMQ for message queuing, providing a reliable and scalable messaging backend.
- **Enhanced Persistence**: Offers message persistence capabilities, ensuring no loss of data in case of server shutdowns.
- **Support for Multi-Server Architectures**: Designed to work efficiently in a distributed server environment.
- **High Throughput**: Maintains the ability to handle thousands of messages per second, leveraging RabbitMQ's performance.

## Project Goals

- Extend Taulukko Messages with advanced features through RabbitMQ integration.
- Provide a solution for more complex messaging needs in larger and distributed systems.
- Maintain ease of use while offering additional robustness and scalability.

## Installation

Install Taulukko Messages Rabbit via NPM:

```bash
npm install taulukko-messages
npm install taulukko-messages-rabbit
```

## Usage Examples

### Initializing the Server with RabbitMQ

```javascript
import { RabbitProvider } from 'taulukko-messages-rabbit';

async function initServer() {
  const server = Server.create({
    port: 7777,
    provider: new RabbitProvider( {host:"localhost", port:5672 } )
  });
  await server.open();
  return server;
}
```
 
## Documentation

For detailed information on how to use and contribute to the project, please refer to the documentation available on the GitHub Wiki page. Visit [the GitHub Wiki page of Taulukko Messages Rabbit](https://github.com/usuario/taulukko-messages-rabbit/wiki).

## Contributions

This project is open source, and contributions are welcome. To contribute, please fork the repository, make your changes, and submit a Pull Request.

## License

This project is licensed under the Creative Commons MIT License - see the LICENSE.md file for more details.

For more information, visit [the project repository on GitHub](https://github.com/Taulukko/taulukko-messages-rabbit).
