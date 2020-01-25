library(readr)
library(tidyverse)

cr::set_cr_theme()

data <- read_csv("../data/homicide-data.csv")

data <- data %>% 
  mutate(victim_age = as.numeric(victim_age)) %>% 
  mutate(reported_date = lubridate::ymd(reported_date))

htx_data <- data %>% 
  filter(city == "Houston" & state == "TX") 

table(htx_data$victim_race)
table(htx_data$victim_sex)
table(htx_data$victim_age)
table(htx_data$victim_race)
table(htx_data$victim_race)

mean(as.numeric(htx_data$victim_age))

htx_data %>% 
  filter(victim_age != "0") %>% 
  mutate(victim_age = as.numeric(victim_age)) %>% 
  summarise(mean_age = mean(victim_age, na.rm = TRUE),
            median_age = median(victim_age, na.rm = TRUE))

htx_data %>% 
  ggplot(aes(x = disposition)) +
  geom_bar(fill = "red") +
  # scale_fill_manual(values = c("#14D006", "#ff3333", "#1306fe")) +
  cr::fix_bars() +
  theme(
    legend.position = "none",
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(fill = "black",
                                    colour = "black",
                                    size = 0.5, linetype = "solid"),
    panel.grid.major = element_line(size = 0, linetype = 'solid',
                                    colour = "black"), 
    panel.grid.minor = element_line(size = 0, linetype = 'solid',
                                    colour = "black"),
    plot.title = element_text(colour = "white", margin = margin(0,0,25,0)),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter")
  ) +
  labs(title = element_blank(),
       x = element_blank(),
       y = element_blank())

htx_data %>% 
  ggplot(aes(x = victim_race)) +
  geom_bar()

htx_data %>% 
  ggplot(aes(x = victim_age)) +
  geom_histogram(fill = "red") +
  stat_count(fill = "red") +
  scale_x_continuous(breaks = c(15,30, 45,60,75)) +
  cr::fix_bars() +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(fill = "black",
                                    colour = "black",
                                    size = 0.5, linetype = "solid"),
    panel.grid.major = element_line(size = 0, linetype = 'solid',
                                    colour = "black"), 
    panel.grid.minor = element_line(size = 0, linetype = 'solid',
                                    colour = "black"),
    plot.title = element_text(colour = "white", margin = margin(0,0,25,0)),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter")
  ) +
  labs(title = "Age of victims",
       x = "Age (years)",
       y = element_blank())

htx_data %>% filter(victim_age %in% c(15:20))
# 331 people aged 15-20
htx_data %>% filter(victim_age %in% c(10:14))
# 29 people aged 10-14


htx_data %>% 
  ggplot(aes(x = reported_date)) +
  geom_point()

htx_data %>% 
  filter(lubridate::year(reported_date) >= 2007) %>% 
  ggplot(aes(x = lubridate::year(reported_date))) +
  geom_bar(fill = "red") +
  scale_y_continuous(expand = expand_scale(mult = c(0,0.001))) +
  scale_x_continuous(breaks = c(2007:2017), labels =  c(2007:2017)) +
  labs(title = "Homicides over Time",
       subtitle = "Houston",
       y = element_blank(), x = element_blank()) +
  cr::drop_axis() +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(fill = "black",
                                    colour = "black",
                                    size = 0.5, linetype = "solid"),
    panel.grid.major = element_line(size = 0, linetype = 'solid',
                                    colour = "black"), 
    panel.grid.minor = element_line(size = 0, linetype = 'solid',
                                    colour = "black"),
    plot.subtitle = element_text(colour = "white", margin = margin(0,0,25,0)),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter")
  )

  

htx_data %>% 
  group_by(disposition) %>% 
  ggplot(aes(x = victim_race)) +
  geom_bar() +
  facet_wrap(~disposition)

htx_data %>% 
  group_by(victim_race) %>% 
  ggplot(aes(x = disposition)) +
  geom_bar() +
  facet_wrap(~victim_race, scales = "free_y")

htx_data %>% 
  group_by(disposition) %>% 
  ggplot(aes(x = victim_age)) +
  geom_histogram(stat = "count") +
  facet_wrap(~disposition)

htx_data %>% 
  group_by(disposition) %>% 
  ggplot(aes(x = lubridate::year(reported_date))) +
  geom_bar(fill = "red") +
  facet_wrap(~disposition) +
  cr::fix_bars() +
  cr::drop_axis("y") +
  scale_x_continuous(breaks = c(2007,2017),labels = c(2007,2017)) +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(fill = "black",
                                    colour = "black",
                                    size = 0.5, linetype = "solid"),
    panel.grid.major = element_line(size = 0, linetype = 'solid',
                                    colour = "black"), 
    panel.grid.minor = element_line(size = 0, linetype = 'solid',
                                    colour = "black"),
    plot.title = element_text(colour = "white", margin = margin(0,0,25,0)),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.text.x = element_text(angle = 45, hjust = 1),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter"),
    strip.background = element_rect(fill="black")
  ) +
  labs(title = "Disposition status over time",
       x = element_blank(), y = element_blank())

htx_data %>% 
  filter(victim_race %in% c("Black", "Hispanic", "White")) %>% 
  group_by(victim_race) %>% 
  ggplot(aes(x = victim_age)) +
  geom_histogram(fill = "red", binwidth = 5) +
  stat_count(fill = "red") +
  facet_wrap(~victim_race) +
  cr::fix_bars() +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(fill = "black",
                                    colour = "black",
                                    size = 0.5, linetype = "solid"),
    panel.grid.major = element_line(size = 0, linetype = 'solid',
                                    colour = "black"), 
    panel.grid.minor = element_line(size = 0, linetype = 'solid',
                                    colour = "black"),
    plot.subtitle = element_text(colour = "white", margin = margin(0,0,25,0)),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.text.x = element_text(angle = 45, hjust = 1),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter"),
    strip.background = element_rect(fill="black")
  ) +
  labs(title = "The Ages of Houston Homicide Victims",
       subtitle = "By Race",
       x = element_blank(), y = element_blank())

htx_data %>% 
  filter(victim_race == "White") %>% 
  ggplot(aes(x = victim_age)) +
  geom_histogram(stat = "count")

htx_data %>% 
  group_by(disposition) %>% 
  ggplot(aes(x = victim_race)) +
  geom_bar() +
  facet_wrap(~victim_sex, scales = "free_y")

htx_data %>% 
  group_by(disposition) %>% 
  ggplot(aes(x = victim_age)) +
  geom_histogram() +
  facet_wrap(~victim_sex, scales = "free_y")

htx_data %>% 
  filter(victim_sex != "Unknown") %>% 
  group_by(disposition) %>% 
  ggplot(aes(x = disposition)) +
  geom_bar(fill = "red") +
  # coord_flip() +
  facet_wrap(~victim_sex, scales = "free_y", nrow = 2) +
  cr::fix_bars() +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(fill = "black",
                                    colour = "black",
                                    size = 0.5, linetype = "solid"),
    panel.grid.major = element_line(size = 0, linetype = 'solid',
                                    colour = "black"), 
    panel.grid.minor = element_line(size = 0, linetype = 'solid',
                                    colour = "black"),
    plot.title = element_text(colour = "white", margin = margin(0,0,25,0)),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.text.x = element_text(angle = 45, hjust = 1),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter"),
    strip.background = element_rect(fill="black")
  ) +
  labs(title = "Males are much more likely to have open cases",
       # subtitle = "By Race",
       x = element_blank(), y = element_blank())

htx_data %>% 
  filter(victim_sex == "Female") %>% 
  group_by(disposition) %>% 
  ggplot(aes(x = disposition)) +
  geom_bar(fill = "red") +
  coord_flip() +
  # facet_wrap(~victim_sex, scales = "free_y") +
  cr::fix_bars() +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(fill = "black",
                                    colour = "black",
                                    size = 0.5, linetype = "solid"),
    panel.grid.major = element_line(size = 0, linetype = 'solid',
                                    colour = "black"), 
    panel.grid.minor = element_line(size = 0, linetype = 'solid',
                                    colour = "black"),
    plot.title = element_text(colour = "white", margin = margin(0,0,25,0)),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.text.x = element_text(angle = 45, hjust = 1),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter"),
    strip.background = element_rect(fill="black")
  ) +
  labs(title = "Female",
       # subtitle = "By Race",
       x = element_blank(), y = element_blank())

# htx_data %>% 
#   group_by(disposition) %>% 
#   ggplot(aes(x = victim_age)) +
#   geom_histogram() +
#   facet_wrap(~disposition, scales = "free_y")
# 
# htx_data %>% 
#   group_by(victim_sex) %>% 
#   ggplot(aes(x = victim_age)) +
#   geom_histogram() +
#   facet_wrap(~victim_sex, scales = "free_y")
