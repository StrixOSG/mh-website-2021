import Particles from 'react-tsparticles';
import React from "react";

export default function Fire({ className = "", id = "fire" }) {
    return (
        <Particles className={className}
            id={id}
            options={{
                fpsLimit: 60,
                fullScreen: false,
                particles: {
                    number: {
                        value: 0,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#2860d1",
                        animation: {
                            enable: true,
                            speed: -70,
                            sync: true
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 1,
                        random: false,
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0,
                            sync: false
                        }
                    },
                    size: {
                        value: 8,
                        random: { enable: true, minimumValue: 4 },
                        animation: {
                            enable: false,
                            speed: 20,
                            minimumValue: 4,
                            sync: false
                        }
                    },
                    life: {
                        duration: {
                            value: 2.5
                        },
                        count: 1
                    },
                    move: {
                        angle: {
                            value: 45,
                            offset: 0
                        },
                        enable: true,
                        gravity: {
                            enable: true,
                            acceleration: -0.5
                        },
                        speed: 0.5,
                        direction: "top",
                        random: false,
                        straight: false,
                        size: true,
                        outModes: {
                            default: "destroy",
                            bottom: "none"
                        },
                    }
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        resize: true
                    }
                },
                detectRetina: false,
                emitters: {
                    direction: "top",
                    rate: {
                        quantity: 2,
                        delay: 0.3
                    },
                    size: {
                        width: 1,
                        height: 1
                    },
                    position: {
                        x: 50,
                        y: 90
                    }
                }
            }}
        />
    );
}