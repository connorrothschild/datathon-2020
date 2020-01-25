library(readr)
library(tidyverse)

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
  geom_bar()

htx_data %>% 
  ggplot(aes(x = victim_race)) +
  geom_bar()

htx_data %>% 
  ggplot(aes(x = victim_age)) +
  geom_histogram(stat = "count")

htx_data %>% 
  ggplot(aes(x = reported_date)) +
  geom_point()

htx_data %>% 
  ggplot(aes(x = lubridate::year(reported_date))) +
  geom_bar()

htx_data %>% 
  group_by(disposition) %>% 
  ggplot(aes(x = victim_race)) +
  geom_bar() +
  facet_wrap(~disposition)

htx_data %>% 
  group_by(disposition) %>% 
  ggplot(aes(x = victim_age)) +
  geom_histogram(stat = "count") +
  facet_wrap(~disposition)

htx_data %>% 
  group_by(disposition) %>% 
  ggplot(aes(x = lubridate::year(reported_date))) +
  geom_bar() +
  facet_wrap(~disposition)

htx_data %>% 
  group_by(victim_race) %>% 
  ggplot(aes(x = victim_age)) +
  geom_histogram(stat = "count") +
  facet_wrap(~victim_race, scales = "free_y")

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
  group_by(disposition) %>% 
  ggplot(aes(x = disposition)) +
  geom_bar() +
  facet_wrap(~victim_sex, scales = "free_y")

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
