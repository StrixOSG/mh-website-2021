import React from 'react';
import Particles, { DestroyMode, DivType, EasingType } from 'react-tsparticles';

export default function Stars() {
    return (
        <Particles
            id='stars'
            options={{
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onDiv: {
                            selectors: [],
                            enable: false,
                            mode: [],
                            type: DivType.circle
                        },
                        onHover: {
                            enable: true,
                            mode: 'bubble',
                            parallax: {
                                enable: false,
                                force: 2,
                                smooth: 10
                            }
                        },
                        resize: true
                    },
                    modes: {
                        attract: {
                            distance: 200,
                            duration: 0.4,
                            easing: EasingType.easeOutQuad,
                            factor: 1,
                            maxSpeed: 50,
                            speed: 1
                        },
                        bubble: {
                            distance: 250,
                            duration: 2,
                            mix: false,
                            opacity: 0,
                            size: 0
                        },
                        connect: {
                            distance: 80,
                            links: {
                                opacity: 0.5
                            },
                            radius: 60
                        },
                        grab: {
                            distance: 400,
                            links: {
                                blink: false,
                                consent: false,
                                opacity: 1
                            }
                        },
                        light: {
                            area: {
                                gradient: {
                                    start: {
                                        value: '#ffffff'
                                    },
                                    stop: {
                                        value: '#000000'
                                    }
                                },
                                radius: 1000
                            },
                            shadow: {
                                color: {
                                    value: '#000000'
                                },
                                length: 2000
                            }
                        },
                        push: {
                            default: true,
                            groups: [],
                            quantity: 4
                        },
                        remove: {
                            quantity: 2
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4,
                            factor: 100,
                            speed: 1,
                            maxSpeed: 50,
                            easing: EasingType.easeOutQuad
                        },
                        slow: {
                            factor: 3,
                            radius: 200
                        },
                        trail: {
                            delay: 1,
                            pauseOnStop: false,
                            quantity: 1
                        }
                    }
                },
                motion: {
                    disable: false,
                    reduce: {
                        factor: 4,
                        value: true
                    }
                },
                particles: {
                    bounce: {
                        horizontal: {
                            random: {
                                enable: false,
                                minimumValue: 0.1
                            },
                            value: 1
                        },
                        vertical: {
                            random: {
                                enable: false,
                                minimumValue: 0.1
                            },
                            value: 1
                        }
                    },
                    collisions: {
                        bounce: {
                            horizontal: {
                                random: {
                                    enable: false,
                                    minimumValue: 0.1
                                },
                                value: 1
                            },
                            vertical: {
                                random: {
                                    enable: false,
                                    minimumValue: 0.1
                                },
                                value: 1
                            }
                        },
                        enable: false,
                        mode: 'bounce',
                        overlap: {
                            enable: true,
                            retries: 0
                        }
                    },
                    color: {
                        value: '#ffffff',
                        animation: {
                            h: {
                                count: 0,
                                enable: false,
                                offset: 0,
                                speed: 1,
                                sync: true
                            },
                            s: {
                                count: 0,
                                enable: false,
                                offset: 0,
                                speed: 1,
                                sync: true
                            },
                            l: {
                                count: 0,
                                enable: false,
                                offset: 0,
                                speed: 1,
                                sync: true
                            }
                        }
                    },
                    destroy: {
                        mode: DestroyMode.none,
                        split: {
                            count: 1,
                            factor: {
                                random: {
                                    enable: false,
                                    minimumValue: 0
                                },
                                value: 3
                            },
                            rate: {
                                random: {
                                    enable: false,
                                    minimumValue: 0
                                },
                                value: {
                                    min: 4,
                                    max: 9
                                }
                            },
                            sizeOffset: true
                        }
                    },
                    gradient: [],
                    groups: {},
                    life: {
                        count: 0,
                        delay: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 0,
                            sync: false
                        },
                        duration: {
                            random: {
                                enable: false,
                                minimumValue: 0.0001
                            },
                            value: 0,
                            sync: false
                        }
                    },
                    links: {
                        blink: false,
                        color: {
                            value: '#ffffff'
                        },
                        consent: false,
                        distance: 150,
                        enable: false,
                        frequency: 1,
                        opacity: 0.4,
                        shadow: {
                            blur: 5,
                            color: {
                                value: '#00ff00'
                            },
                            enable: false
                        },
                        triangles: {
                            enable: false,
                            frequency: 1
                        },
                        width: 1,
                        warp: false
                    },
                    move: {
                        angle: {
                            offset: 0,
                            value: 90
                        },
                        attract: {
                            distance: 200,
                            enable: false,
                            rotate: {
                                x: 600,
                                y: 600
                            }
                        },
                        decay: 0,
                        distance: {},
                        direction: 'none',
                        drift: 0,
                        enable: true,
                        gravity: {
                            acceleration: 9.81,
                            enable: false,
                            inverse: false,
                            maxSpeed: 50
                        },
                        path: {
                            clamp: true,
                            delay: {
                                random: {
                                    enable: false,
                                    minimumValue: 0
                                },
                                value: 0
                            },
                            enable: false,
                            options: {}
                        },
                        outModes: {
                            default: 'out',
                            bottom: 'out',
                            left: 'out',
                            right: 'out',
                            top: 'out'
                        },
                        random: true,
                        size: false,
                        speed: 0.1,
                        spin: {
                            acceleration: 0,
                            enable: false
                        },
                        straight: false,
                        trail: {
                            enable: false,
                            length: 10,
                            fillColor: {
                                value: '#000000'
                            }
                        },
                        vibrate: false,
                        warp: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                            factor: 1000
                        },
                        limit: 0,
                        value: 160
                    },
                    opacity: {
                        random: {
                            enable: true,
                            minimumValue: 0.1
                        },
                        value: {
                            min: 0,
                            max: 1
                        },
                        animation: {
                            count: 0,
                            enable: true,
                            speed: 1,
                            sync: false,
                            destroy: 'none',
                            startValue: 'random',
                            minimumValue: 0
                        }
                    },
                    orbit: {
                        animation: {
                            count: 0,
                            enable: false,
                            speed: 1,
                            sync: false
                        },
                        enable: false,
                        opacity: 1,
                        rotation: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 45
                        },
                        width: 1
                    },
                    reduceDuplicates: false,
                    repulse: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 0,
                        enabled: false,
                        distance: 1,
                        duration: 1,
                        factor: 1,
                        speed: 1
                    },
                    roll: {
                        darken: {
                            enable: false,
                            value: 0
                        },
                        enable: false,
                        enlighten: {
                            enable: false,
                            value: 0
                        },
                        mode: 'vertical',
                        speed: 25
                    },
                    rotate: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 0,
                        animation: {
                            enable: false,
                            speed: 0,
                            sync: false
                        },
                        direction: 'clockwise',
                        path: false
                    },
                    shadow: {
                        blur: 0,
                        color: {
                            value: '#000000'
                        },
                        enable: false,
                        offset: {
                            x: 0,
                            y: 0
                        }
                    },
                    shape: {
                        options: {},
                        type: 'circle'
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 1
                        },
                        value: {
                            min: 1,
                            max: 3
                        },
                        animation: {
                            count: 0,
                            enable: false,
                            speed: 4,
                            sync: false,
                            destroy: 'none',
                            startValue: 'random',
                            minimumValue: 0.3
                        }
                    },
                    stroke: {
                        width: 0
                    },
                    tilt: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 0,
                        animation: {
                            enable: false,
                            speed: 0,
                            sync: false
                        },
                        direction: 'clockwise',
                        enable: false
                    },
                    twinkle: {
                        lines: {
                            enable: false,
                            frequency: 0.05,
                            opacity: 1
                        },
                        particles: {
                            enable: false,
                            frequency: 0.05,
                            opacity: 1
                        }
                    },
                    wobble: {
                        distance: 5,
                        enable: false,
                        speed: 50
                    },
                    zIndex: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 0,
                        opacityRate: 1,
                        sizeRate: 1,
                        velocityRate: 1
                    }
                },
                detectRetina: false,
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
            }}
        />
    );
}