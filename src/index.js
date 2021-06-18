export default (options = {}) => ({
    config : (config = false) => {
        // Modify state machine config.
        // Utilize configEditor when possible.

        // Must return object to be new config.
    },

    service : (config = false, service = false) => {
        // Access the service as well as the config used to generate the service.

        // Doesn't need to return anything.
    },
});

// You can export helper functions for the users of your plugin.
const exampleHelper = () => {

};

export {
    exampleHelper,
};
