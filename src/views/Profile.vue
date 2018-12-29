<template>
    <v-layout>
        <v-flex>
            <v-stepper v-model="e1" alt-labels non-linear>
                <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1" :editable="true">My Profile</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="e1 > 2" step="2" :editable="true">My Priorities</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3" :editable="true">Other Information</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-stepper v-model="e6" vertical>
                            <v-stepper-step :complete="e6 > 1" step="1">
                                Select an app
                                <small>Summarize if needed</small>
                            </v-stepper-step>

                            <v-stepper-content step="1">
                                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                                <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
                                <v-btn flat>Cancel</v-btn>
                            </v-stepper-content>

                            <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this
                                app</v-stepper-step>

                            <v-stepper-content step="2">
                                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                                <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                                <v-btn flat>Cancel</v-btn>
                            </v-stepper-content>

                            <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad
                                unit</v-stepper-step>

                            <v-stepper-content step="3">
                                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                                <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                                <v-btn flat>Cancel</v-btn>
                            </v-stepper-content>

                            <v-stepper-step step="4">View setup instructions</v-stepper-step>
                            <v-stepper-content step="4">
                                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                                <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
                                <v-btn flat>Cancel</v-btn>
                            </v-stepper-content>
                        </v-stepper>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

                        <v-btn color="primary" @click="e1 = 3">
                            Continue
                        </v-btn>

                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

                        <v-btn color="primary" @click="e1 = 1">
                            Continue
                        </v-btn>

                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            e1: 0,
            e6: 0,
        }
    }
}
</script>

<style>

</style>
