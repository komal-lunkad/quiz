class Command {
    constructor(commandName) {
        commandName = commandName.trim().split(',');
        if (!commandName || commandName.length < 2) {
            throw new Error("Incorrect command name specified");
        }

        this.name = commandName[0];
        commandName.shift();
        this.params = commandName;
    }
}

module.exports = Command;