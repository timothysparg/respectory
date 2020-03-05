import * as winston from "winston";

const winstonLogger = winston.createLogger({
    level: "debug",
    exitOnError: false,
    silent: true,
});

/**
 * Global logger instance
 * By default all logging to this logger will be suppressed.
 * Call configureLogging to set up console and file transports.
 */
export const logger: Logger = winstonLogger;

export interface Logger {
    log: LogMethod;

    error: LeveledLogMethod;
    warn: LeveledLogMethod;
    info: LeveledLogMethod;
    debug: LeveledLogMethod;
    verbose: LeveledLogMethod;
}

export interface LogMethod {
    (level: string, msg: string, callback: LogCallback): Logger;

    (level: string, msg: string, meta: any, callback: LogCallback): Logger;

    (level: string, msg: string, ...meta: any[]): Logger;
}

export interface LeveledLogMethod {
    (msg: string, callback: LogCallback): Logger;

    (msg: string, meta: any, callback: LogCallback): Logger;

    (msg: string, ...meta: any[]): Logger;
}

export type LogCallback = (error?: any, level?: string, msg?: string, meta?: any) => void;
