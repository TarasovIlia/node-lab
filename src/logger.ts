import { createLogger, format, transports, config } from 'winston';

const logger = createLogger({
    defaultMeta: { component: 'user-service' },
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' })
    ]
});

export default logger