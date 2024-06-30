num_processes = int(input("Enter the number of processes: ")) 
burst_times = []
waiting_time = {}
turnaround_time = {}
for i in range(num_processes):
    burst_times.append(int(input(f"Enter the burst time of process {i+1}: ")))

waiting_time['process_1'] = 0
def find_waiting_time(burst_times, num_processes):
    for i in range(1, num_processes):
        waiting_time[f'process_{i+1}'] = burst_times[i-1] + waiting_time[f'process_{i}']
    return waiting_time
#Here i ma using the formula of waiting time; waiting time of current process = burst time of previous process + waiting time of previous process
def find_turnaround_time(burst_times, waiting_time, num_processes):
    for i in range(num_processes):
        turnaround_time[f'process_{i+1}'] = burst_times[i] + waiting_time[f'process_{i+1}']
    return turnaround_time
#Here i am using the formula of turnaround time; turnaround time of current process = burst time of current process + waiting time of current process
def avg_waiting_time(waiting_time, num_processes):
    return sum(waiting_time.values())/num_processes

def avg_turnaround_time(turnaround_time, num_processes):
    return sum(turnaround_time.values())/num_processes


waiting_time = find_waiting_time(burst_times, num_processes)
turnaround_time = find_turnaround_time(burst_times, waiting_time, num_processes)

# print("Waiting Time: ", waiting_time)
# print("Turnaround Time: ", turnaround_time)

avg_waiting_time = avg_waiting_time(waiting_time, num_processes)
avg_turnaround_time = avg_turnaround_time(turnaround_time, num_processes)

# print("Average Waiting Time: ", avg_waiting_time)
# print("Average Turnaround Time: ", avg_turnaround_time)
print("Process\t\t Burst Time \t\tWaiting Time \t\tTurnaround Time")
for i in range(num_processes):
    print(f"process_{i+1}\t\t{burst_times[i]}\t\t\t{waiting_time[f'process_{i+1}']}\t\t\t{turnaround_time[f'process_{i+1}']}")

print(f"Average waiting time: {avg_waiting_time}")
print(f"Average turnaround time: {avg_turnaround_time}")